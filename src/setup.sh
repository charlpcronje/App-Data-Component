#!/bin/bash

# Function to prompt user to copy and paste code, then wait for them to press Enter
prompt_for_paste() {
  read -p "Press Enter after you have copied and pasted the code for $1..."
}

# Create and open the ConsoleProxyService file
CONSOLE_PROXY_SERVICE="src/app/services/console-proxy.service.ts"
echo "Creating $CONSOLE_PROXY_SERVICE..."
mkdir -p "$(dirname "$CONSOLE_PROXY_SERVICE")"
echo "// $CONSOLE_PROXY_SERVICE" > "$CONSOLE_PROXY_SERVICE"
code-server "$CONSOLE_PROXY_SERVICE"
echo "Please copy and paste the ConsoleProxyService code into the opened file."
prompt_for_paste "$CONSOLE_PROXY_SERVICE"

# Create and open the DomTreeService file
DOM_TREE_SERVICE="src/app/services/dom-tree.service.ts"
echo "Creating $DOM_TREE_SERVICE..."
echo "// $DOM_TREE_SERVICE" > "$DOM_TREE_SERVICE"
code-server "$DOM_TREE_SERVICE"
echo "Please copy and paste the DomTreeService code into the opened file."
prompt_for_paste "$DOM_TREE_SERVICE"

# Create and open the AppDataComponent files
APP_DATA_COMPONENT_TS="src/app/components/app-data/app-data.component.ts"
APP_DATA_COMPONENT_HTML="src/app/components/app-data/app-data.component.html"
APP_DATA_COMPONENT_SCSS="src/app/components/app-data/app-data.component.scss"
echo "Creating $APP_DATA_COMPONENT_TS..."
mkdir -p "$(dirname "$APP_DATA_COMPONENT_TS")"
echo "// $APP_DATA_COMPONENT_TS" > "$APP_DATA_COMPONENT_TS"
code-server "$APP_DATA_COMPONENT_TS"
echo "Please copy and paste the AppDataComponent TypeScript code into the opened file."
prompt_for_paste "$APP_DATA_COMPONENT_TS"

echo "Creating $APP_DATA_COMPONENT_HTML..."
echo "<!-- $APP_DATA_COMPONENT_HTML -->" > "$APP_DATA_COMPONENT_HTML"
code-server "$APP_DATA_COMPONENT_HTML"
echo "Please copy and paste the AppDataComponent HTML code into the opened file."
prompt_for_paste "$APP_DATA_COMPONENT_HTML"

echo "Creating $APP_DATA_COMPONENT_SCSS..."
echo "/* $APP_DATA_COMPONENT_SCSS */" > "$APP_DATA_COMPONENT_SCSS"
code-server "$APP_DATA_COMPONENT_SCSS"
echo "Please copy and paste the AppDataComponent SCSS code into the opened file."
prompt_for_paste "$APP_DATA_COMPONENT_SCSS"

# Update the AppModule to include AppDataComponent
APP_MODULE="src/app/app.module.ts"
code-server "$APP_MODULE"
echo "Please update the AppModule (app.module.ts) to include the AppDataComponent:"
echo "1. Import the AppDataComponent and the services."
echo "2. Add AppDataComponent to the declarations array."
prompt_for_paste "$APP_MODULE"

# Update the AppDataComponent to use ConsoleProxyService and DomTreeService
APP_DATA_COMPONENT_TS_UPDATE="src/app/components/app-data/app-data.component.ts"
code-server "$APP_DATA_COMPONENT_TS_UPDATE"
echo "Please update the AppDataComponent (app-data.component.ts) to use ConsoleProxyService and DomTreeService."
prompt_for_paste "$APP_DATA_COMPONENT_TS_UPDATE"

echo "All files have been created and updated. Please ensure you have saved all changes in your editor."
