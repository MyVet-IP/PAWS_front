import { Aside } from "../components/aside.js";
import { Topbar } from "../components/topbar.js";

export function Layout(viewContent, role, currentPath) {

  // Guest layout (landing, login, register)
  if (role === "guest") {
    return `
      <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        ${viewContent}
      </div>
    `;
  }

  // Authenticated layout (user or vet)
  return `
    <div class="flex h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">

      ${Aside(role, currentPath)}

      <div class="flex-1 flex flex-col overflow-hidden">

        ${Topbar(role, currentPath)}

        <main class="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
          ${viewContent}
        </main>

      </div>

    </div>
  `;
}



