# Frontend migration from Vue 2 to Vue 3

The frontend is quite outdated. It uses Vue 2, including old tooling. It is written in JavaScript, not TypeScript.
The protobuf files are generated with protobufjs, but we want to use buf instead.

There is a similar project with an up-to-date frontend: https://github.com/RoboCup-SSL/ssl-vision-client
This should be used as a reference for the migration.

## Migration Steps
1. **New Vue 3 Project**: Create a new Vue 3 project using Vite.
   - Use TypeScript for better type safety.
   - Use the latest version of Vue Router and Pinia.
   - Set up ESLint and Prettier for code quality.
2. **Compare with reference project**: Look at the structure and components of the ssl-vision-client project.
   - Use similar patterns for state management, routing, and component structure.
   - Use the same libraries for WebSocket communication and protobuf handling.
   - Do not use Quasar or any other UI framework, stick to plain Vue components.
3. **Protobuf Handling**: Use `buf` to generate TypeScript definitions from the protobuf files.
   - Set up `buf` in the project and configure it to generate TypeScript files.
   - Ensure that the protobuf messages are compatible with the existing backend.
4. **Component Migration**: Migrate the existing Vue components to the new project.
   - Rewrite components in TypeScript.
   - Use the Composition API for better reactivity and organization.
   - Ensure that the components are modular and reusable.
5. **Update Documentation**: Update the README and other documentation to reflect the new project structure and usage.
   - Include instructions for setting up the development environment.
   - Document how to run the project, build it, and deploy it.
   - Include information on how to add new team logos and modify the configuration.
