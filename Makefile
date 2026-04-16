.PHONY: start-n8n stop-n8n push build init

N8N_PORT ?= 5678
N8N_CONTAINER ?= n8n-dev
GITHUB_REMOTE ?= github
GITHUB_BRANCH ?= $(shell git rev-parse --abbrev-ref HEAD)


start-n8n:
	docker run -d --rm \
		--name $(N8N_CONTAINER) \
		-p $(N8N_PORT):5678 \
		-v $(CURDIR):/home/node/.n8n/custom/node_modules/n8n-nodes-freelo \
		-v n8n-dev-data:/home/node/.n8n \
		n8nio/n8n:latest
	@echo "n8n running at http://localhost:$(N8N_PORT)"

stop-n8n:
	docker stop $(N8N_CONTAINER) 2>/dev/null || true

init:
	@# Switch API to api2 and set custom package name
	sed -i 's|api\.freelo\.io|api2.freelo.io|g' \
		nodes/Freelo/Freelo.node.ts \
		nodes/Freelo/shared/freeloApiRequest.ts \
		credentials/FreeloApi.credentials.ts
	npm pkg set name="n8n-nodes-marek-custom"
	@echo "Initialized: API set to api2.freelo.io, package name set to n8n-nodes-marek-custom"

push:
	@# Rewrite package name and API URL for GitHub (dev npm)
	npm pkg set name="n8n-nodes-freelo"
	sed -i 's|api2\.freelo\.io|api.freelo.io|g' \
		nodes/Freelo/Freelo.node.ts \
		nodes/Freelo/shared/freeloApiRequest.ts \
		credentials/FreeloApi.credentials.ts
	@# Stage, commit, push, then revert to local state
	git add -A
	git commit -m "chore: prepare for dev publish" --allow-empty || true
	git push -f $(GITHUB_REMOTE) $(GITHUB_BRANCH); \
	push_exit=$$?; \
	git reset --mixed HEAD~1 > /dev/null; \
	git checkout -- .; \
	if [ $$push_exit -ne 0 ]; then echo "Push failed!"; exit $$push_exit; fi
	@echo "Pushed to $(GITHUB_REMOTE)/$(GITHUB_BRANCH) with dev package identity"
