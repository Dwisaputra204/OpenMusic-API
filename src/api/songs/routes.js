const routes = (handler) => [
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSongHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/songs',
  //   handler: handler.getNotesHandler,
  // },
  // {
  //   method: 'GET',
  //   path: '/songs/{id}',
  //   handler: handler.getNoteByIdHandler,
  // },
  // {
  //   method: 'PUT',
  //   path: '/songs/{id}',
  //   handler: handler.putNoteByIdHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/songs/{id}',
  //   handler: handler.deleteNoteByIdHandler,
  // },
];

module.exports = routes;
