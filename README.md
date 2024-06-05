# My Ionic/Angular App

This project includes an `AppDataComponent` for enhanced application state management, logging, and DOM inspection. This component is integrated as a singleton service and runs in the background, providing an overlay for viewing app routes, properties, logs, and the DOM tree.

## Features

1. **Singleton Service**: Ensures a single instance of the app component exists.
2. **Data Methods**: Provides methods for adding and requesting data/objects from the singleton.
3. **External API Integration**: Methods for registering and retrieving data from external APIs.
4. **Overlay Structure**: Split into two vertical columns (Left: dynamic width, Right: 300px).
5. **Resizable Horizontal Bars**: Three resizable horizontal bars with sizes stored in local storage.
6. **Route and State Display**: Displays available routes and current state.
7. **Properties Tree**: Collapsible tree structure for app properties.
8. **Console Logs**: Captures and displays logs, errors, and warnings.
9. **DOM Tree**: Displays a tree representation of the DOM, highlighting hidden, loading, and failed elements.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/my-ionic-angular-app.git
cd my-ionic-angular-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
ionic serve
```

## Usage Instructions

### Ensuring Services and Component Integration

- Verify that `ConsoleProxyService` and `DomTreeService` are created and injected into `AppDataComponent`.
- Ensure that `AppDataComponent` is declared in `AppModule` and included in the declarations array.

### Starting the Application

Start your Ionic/Angular application using the following command:
```bash
ionic serve
```

### Component Initialization

- The `AppDataComponent` runs in the background with the overlay hidden by default.
- To activate and display the overlay, double-tap the backtick key (`` ` ``).

### Using the Overlay

- **Top Bar (Routes and State)**: Displays available routes and highlights the current route.
- **Middle Bar (Properties)**: Displays app properties in a collapsible tree structure. Click on properties to toggle visibility and view information about their origin and usage.
- **Bottom Bar (Console Logs)**: Displays captured console logs, errors, and warnings. Each log entry includes the original source line.
- **Right Bar (DOM Tree)**: Displays a tree representation of the DOM. Hidden elements are displayed in gray, loading elements in blue, and failed elements in red.

### Interacting with the Overlay

- **Resizing Bars**: Resize the horizontal bars by dragging the handles. Sizes are stored in local storage and restored on page load.
- **Dynamic Data Updates**: The component dynamically updates routes, properties, logs, and the DOM tree as you interact with the app and retrieve data from external APIs.

### Key Shortcuts and Actions

- **Activate/Show Overlay**: Double-tap the backtick key (`` ` ``).
- **Resize Horizontal Bars**: Drag handles between Top Bar, Middle Bar, and Bottom Bar.
- **Toggle Property Visibility**: Click on a property node in the Middle Bar.
- **View Log Source**: View the source line next to each log entry in the Bottom Bar.
- **View DOM Tree**: Explore the DOM tree in the Right Bar.

## Development

### Creating and Updating Files

To facilitate the creation and updating of necessary files, use the provided bash script. The script guides you through the process of creating and updating each file required for integrating the `AppDataComponent`.

### Bash Script

```bash
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
```

### Summary

Follow the steps outlined above to integrate and use the `AppDataComponent` in your Ionic/Angular application. This component enhances your development experience by providing a centralized state management system, dynamic route and property display, logging, and DOM inspection capabilities.