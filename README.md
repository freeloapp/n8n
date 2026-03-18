# n8n-nodes-freelo

This is the official [Freelo](https://www.freelo.io) node for n8n. It lets you automate your project management workflows by connecting Freelo with hundreds of other apps and services.

[Freelo](https://www.freelo.io) is a project management and team collaboration platform for managing projects, tasks, time tracking, and team communication.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Table of Contents

- [Installation](#installation)
- [Credentials](#credentials)
- [Operations](#operations)
- [Example Workflows](#example-workflows)
- [Resources](#resources)

## Installation

### n8n Marketplace (Recommended)

If available, install directly from the n8n marketplace:

1. Open your n8n instance
2. Go to the **Nodes** panel and search for **Freelo**
3. Click **Install**

### Community Nodes

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-freelo` in the **npm Package Name** field
4. Agree to the risks and click **Install**

### Manual Installation

```bash
cd ~/.n8n/nodes
npm install n8n-nodes-freelo
```

Then restart n8n.

## Credentials

You need a Freelo API key to authenticate:

1. Log in to your [Freelo dashboard](https://app.freelo.io)
2. Click on your avatar in the top-right corner → **Settings**
3. Scroll to the bottom of the page to find the **API key** section
4. Copy your unique API key

In n8n, create a new **Freelo API** credential and paste your email and API key.

> The Freelo API uses HTTP Basic Auth with your email as the username and your API key as the password.

## Operations

This node features **90+ operations** covering the full Freelo API, including:

### Project
- **Get All** – List all projects (own, invited, archived, templates)
- **Get** – Get a single project by ID
- **Create** – Create a new project
- **Archive** – Archive a project

### To-Do List
- **Get All** – List all to-do lists in a project
- **Get** – Get a single to-do list
- **Create** – Create a new to-do list in a project

### Task
- **Get All** – List all tasks in a to-do list
- **Get** – Get a single task by ID
- **Create** – Create a new task or subtask
- **Update** – Update task details (name, due date, assignee, priority)
- **Delete** – Delete a task
- **Move** – Move a task to another to-do list

### Comment
- **Get All** – List all comments on a task
- **Create** – Add a comment to a task

### Label
- **Get All** – List all available labels
- **Add** – Add a label to a task
- **Remove** – Remove a label from a task

### User
- **Get All** – List all project workers
- **Invite** – Invite a user to a project
- **Remove** – Remove a user from a project

### Work Report
- **Get All** – List work reports for a task or project
- **Create** – Log a time entry on a task

…and many more. See the full list of operations directly in the n8n node editor.


## Notes

- The Freelo API has a rate limit of **25 requests per minute**. If you exceed this limit, the API will return HTTP 429 (Too Many Requests). Consider adding delays between operations when processing large batches.

## Example Workflows

### Sync new Freelo tasks to Google Sheets

1. **Freelo: Get All Tasks** → fetch tasks from a project
2. **Google Sheets: Append Row** → log task name, assignee, and due date

## Resources

- [Freelo API Documentation](https://api.freelo.io/docs/v1/freelo-api)
- [Freelo Help Center](https://www.freelo.io/en/help)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

