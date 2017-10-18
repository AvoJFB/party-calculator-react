import { UIRouterReact, servicesPlugin, pushStateLocationPlugin } from '@uirouter/react';
// import { visualizer } from '@uirouter/visualizer';
import states from './routerStates';
import * as hooks from './hooks';

// Create a new instance of the Router
const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

// Register the initial (eagerly loaded) states
states.forEach(state => router.stateRegistry.register(state));

// Global config for router
router.urlService.rules.initial({ state: 'base.dashboard' });
router.urlRouter.otherwise('/dashboard');
// Register the "requires auth" hook with the TransitionsService
Object.entries(hooks).forEach((entry) => {
  const [, hook] = entry;
  router.transitionService.onEnter(hook.criteria, hook.callback);
});

// Start the router
router.start();

// Setup the state visualizer
// visualizer(router);
export default router;
