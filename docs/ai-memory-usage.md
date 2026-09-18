# Using ai-memory with Codex

This guide describes the native **ai-memory 2.3.1** installation on this computer. The server runs locally as a user systemd service, and Codex has its MCP connection and lifecycle hooks installed. No LLM or embedding provider is configured. At installation verification, the store contained no sessions, observations, or pages; previous conversations were not imported.

## 1. Start your first session

Restart Codex so it loads the new integration. When it displays **Hooks need review**, review the installed hooks and trust them to enable capture.

For a terminal session in Merca:

```bash
cd /home/slayking/Projects/grocery-store-financial-management-system
ai-memory run codex
```

`ai-memory run` adds managed session continuity: it associates the work with the current project and maintains a portable visible-event ledger. A regular `codex` launch also uses the installed MCP connection and trusted hooks, but does not add this managed-workstream layer.

Work normally. Hooks capture sanitized, bounded observations of prompts and tool activity. They are not a complete transcript or a guarantee that every detail will be remembered. Substantive completed sessions can produce rule-based summary pages without an AI provider. Ending a turn is different from ending the session.

## 2. Ask Codex to use memory

These are prompts to type into Codex, not shell commands:

| What you want | Example prompt |
| --- | --- |
| Recall earlier work | “Use ai-memory to find where we left off on this project.” |
| Find a decision | “Search ai-memory for our checkout payment decisions.” |
| Read the supporting note | “Read the full memory page behind that result.” |
| Save a lasting fact | “Save a durable ai-memory note: Merca targets small Android phones, including 320px-wide screens.” |
| Prepare the next session | “Save an ai-memory handoff with what changed, what remains, and the next steps.” |

Ask explicitly when a decision matters. Automatic capture does not mean the agent will automatically retrieve every relevant fact. Keep canonical project rules in `AGENTS.md` and `docs/`; memory supplements those files.

Before closing a session, request a handoff. Later, launch from the same project again with `ai-memory run codex`. To resume your most recently managed checkout from another directory:

```bash
ai-memory continue
```

To choose among managed workstreams instead:

```bash
ai-memory resume
```

These commands become useful after you have created a managed session.

## 3. Where memory lives

The data root on this computer is:

```text
/home/slayking/.local/share/ai-memory/
```

It is outside the Merca project. Multiple projects can share this server while keeping separately scoped records. Memory is not automatically committed to Merca's Git history or synchronized to another computer.

| Location under the data root | Contents |
| --- | --- |
| `wiki/` | Human-readable Markdown memory pages |
| `db/memory.sqlite` | SQLite database containing indexes and structured records, including sessions and observations |
| `raw/` | Managed-workstream visible-event transcript segments, when managed launches are used |
| `config.toml` | ai-memory server configuration |
| `logs/` | Application logs |
| `hooks/` | Installed agent hook scripts |
| `models/` | Directory reserved for local embedding models |

Other installation files:

| File | Purpose |
| --- | --- |
| `~/.local/bin/ai-memory` | Executable |
| `~/.codex/config.toml` | Codex MCP registration |
| `~/.codex/hooks.json` | Codex lifecycle hooks |
| `~/.config/systemd/user/ai-memory.service` | Background service definition |

Here, `~` means `/home/slayking`. The server listens at `http://127.0.0.1:49374`; Codex connects to `/mcp`. The web interface is not enabled in this installation.

ai-memory stores memory locally and has no external LLM or embedding provider enabled. This does not change Codex's own model connection: memory retrieved into a Codex conversation becomes part of that conversation's context.

## 4. Inspect and search from the terminal

Check the server, storage path, record counts, and provider state:

```bash
ai-memory status
```

Search from inside the project directory:

```bash
cd /home/slayking/Projects/grocery-store-financial-management-system
ai-memory search 'checkout'
ai-memory search 'payment OR invoice' --limit 20
ai-memory read-page 'checkout'
```

`search` uses SQLite full-text search syntax. `read-page` searches and opens the highest matching page. Use `ai-memory read-page --path 'path-from-the-result.md'` to request a specific page instead.

The CLI derives project scope from the current project and any applicable `.ai-memory.toml` marker. Explicit `--workspace` and `--project` options are available. MCP project-scoped calls require the agent to use the correct scope; if retrieval misses expected information, verify the scope before concluding that nothing was recorded.

## 5. Manage the background service

The service is enabled for your user and starts with your user systemd session. Closing a terminal does not stop it.

```bash
systemctl --user status ai-memory.service
systemctl --user restart ai-memory.service
systemctl --user stop ai-memory.service
systemctl --user start ai-memory.service
```

After changing the server's `config.toml`, restart the service. View recent service logs with:

```bash
journalctl --user -u ai-memory.service -n 50 --no-pager
```

## 6. Back up memory

Create an online backup while the service is running:

```bash
mkdir -p ~/Backups/ai-memory
ai-memory backup --to "$HOME/Backups/ai-memory/memory-$(date +%Y%m%d-%H%M%S).tar.gz"
```

The documented backup contains a consistent SQLite snapshot, the wiki tree, and `config.toml`. Do not assume it includes `raw/`, hook files, or Codex and systemd configuration. If you need a complete installation archive, stop the service, copy the entire data root and the external configuration files listed above, then start it again.

Copy backups to another device if you need protection against disk failure. Restoring overwrites stored state and requires the server to be stopped; consult the lifecycle guide before restoring. Copying only `wiki/` does not preserve all session and observation records.

## 7. If nothing is being remembered

Run these from the project directory:

```bash
ai-memory status
ai-memory doctor
```

Check that the service is running, Codex was restarted, and the hooks were trusted. Work through a new session and exit normally before expecting its final summary. `doctor` compares local agent history with captured sessions; old conversations from before installation can account for missing coverage.

Installing hooks does not import earlier conversations. `ai-memory backfill --help` describes the separate local-history import. `ai-memory bootstrap` is a different operation: it summarizes existing project files and Git history using a configured LLM provider, so it is not available with the current provider-free setup.

If a session's ending was missed, inspect `ai-memory finalize-session --help` for manually finalizing the appropriate open session.

## References

Command examples were checked against the installed v2.3.1 CLI. Upstream references for that version:

- [Usage and memory workflows](https://github.com/akitaonrails/ai-memory/blob/v2.3.1/docs/usage.md)
- [Installation and integrations](https://github.com/akitaonrails/ai-memory/blob/v2.3.1/docs/install.md)
- [Backup, restore, and lifecycle operations](https://github.com/akitaonrails/ai-memory/blob/v2.3.1/docs/lifecycle-ops.md)
