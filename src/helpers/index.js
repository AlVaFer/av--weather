 /**
 * @method getIdsJoined
 * @param {Array} state - Array of cities
 * @returns {String} - Joined list of ids of cities
 */
 export const getIdsJoined = state =>{
   /*
   Si es necesario inicializar empleando una lista de ids y no  
   un array de ciudades se podría hacer aquí con
   if (state.length === 0) return INITIAL_CITIES;
   */
  return state.map(item => item.id).join();
};

