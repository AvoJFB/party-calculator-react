import store from './store';

/**
 * This file contains a Transition Hook which protects a
 * route that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */

export const authHook = {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  criteria: {
    to: state => state.data && state.data.requiresAuth,
  },
  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)
  callback: (transition) => {
    const $state = transition.router.stateService;
    if (!store.getState().securityContext.isLoggedIn) {
      return $state.target('base.auth.signin', undefined, { location: true });
    }
    return transition;
  },
};

export const anonymousHook = {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  criteria: {
    to: state => state.data && state.data.requiresLogout,
  },
  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)
  callback: (transition) => {
    const $state = transition.router.stateService;
    if (store.getState().securityContext.isLoggedIn) {
      return $state.target('base.dashboard', undefined, { location: true });
    }
    return transition;
  },
};
