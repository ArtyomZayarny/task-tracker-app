# Task Master AI MCP Setup Guide

## Step 1: Configure MCP in Cursor

You have two options to configure Task Master MCP:

### Option A: Using Cursor Settings UI (Recommended)

1. Open Cursor Settings: Press `Ctrl+Shift+J` (or `Cmd+Shift+J` on Mac)
2. Click on the **MCP** tab on the left sidebar
3. Enable **task-master-ai** with the toggle switch
4. Add your API keys in the environment variables section

### Option B: Using Global Configuration File

Create or edit `~/.cursor/mcp.json` with the following content:

```json
{
  "mcpServers": {
    "task-master-ai": {
      "command": "npx",
      "args": ["-y", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
        "PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
        "OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
        "TASK_MASTER_TOOLS": "standard"
      },
      "type": "stdio"
    }
  }
}
```

**Important:** Replace the placeholder API keys with your actual keys. You only need to include the keys for the AI providers you want to use.

## Step 2: Restart Cursor

After configuring, restart Cursor to load the MCP server.

## Step 3: Initialize Task Master

Once MCP is configured and Cursor is restarted, open the AI chat pane and say:

```
Initialize taskmaster-ai in my project
```

This will create the `.taskmaster` directory structure with:

- Project configuration
- Task storage
- Templates for PRDs

## Step 4: Create a PRD (Product Requirements Document)

For new projects, create your PRD at `.taskmaster/docs/prd.txt`.

An example PRD template will be available after initialization in `.taskmaster/templates/example_prd.txt`.

## Step 5: Start Using Task Master

After initialization, you can use commands like:

- `Can you parse my PRD at .taskmaster/docs/prd.txt?`
- `What's the next task I should work on?`
- `Can you help me implement task 3?`
- `Can you show me tasks 1, 3, and 5?`
- `Can you help me expand task 4?`

## Tool Loading Configuration

The configuration uses `"TASK_MASTER_TOOLS": "standard"` which loads 15 tools (~10,000 tokens).

Available modes:

- `"all"` - 36 tools (~21,000 tokens) - Complete feature set
- `"standard"` - 15 tools (~10,000 tokens) - Common operations (recommended)
- `"core"` or `"lean"` - 7 tools (~5,000 tokens) - Essential workflow

You can change this in your MCP configuration if needed.

## Resources

- GitHub: https://github.com/eyaltoledano/claude-task-master
- Documentation: https://docs.task-master.dev

