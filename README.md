### Watch-Dir-Count

Watch count of files in a directory and

-   run specified script
-   send email report

### Install

```bash
npm install -g @aibulat/watch-dir-count
# create .env
# create log.cfg.json
wdc
```

### Dotenv file

Filename: `.env`

Example:

```
INTERVAL="60"
THRESHOLD="100"
DIR="/var/queue"
EXEC="echo {{dir}} {{count}}"

EMAIL_TEMPLATE="./templates/default.eml"
EMAIL_FROM="wdc@example.com"
EMAIL_TO="to@example.com,another@example.com"
EMAIL_SUBJECT="Queue Report"

SMTP_HOST="smtp.example.com"
SMTP_PORT="25"
SMTP_USER=""
SMTP_PASS=""
```

### Logger configuration

Filename: `log.cfg.json`

Example:

```json
{
    "name": "wdc",
    "streams": [
        {
            "level": "debug",
            "path": "./log/debug.json"
        },
        {
            "level": "info",
            "path": "./log/logs.json"
        }
    ]
}
```
