/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const ClientError = require('../../exceptions/ClientError');

class NotesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSongHandler = this.postSongHandler.bind(this);
    // this.getSongsHandler = this.getSongsHandler.bind(this);
    // this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    // this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    // this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  postSongHandler(request, h) {
    try {
      this._validator.validateNotePayload(request.payload);
      const {
        title = 'untitled', year, performer, genre, duration,
      } = request.payload;

      const songId = this._service.addSong({
        title, year, performer, genre, duration,
      });

      const response = h.response({
        status: 'success',
        message: 'Song berhasil ditambahkan',
        data: {
          songId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  // getSongsHandler() {
  //   const notes = this._service.getNotes();
  //   return {
  //     status: 'success',
  //     data: {
  //       notes,
  //     },
  //   };
  // }

  // getSongByIdHandler(request, h) {
  //   try {
  //     const { id } = request.params;
  //     const note = this._service.getNoteById(id);
  //     return {
  //       status: 'success',
  //       data: {
  //         note,
  //       },
  //     };
  //   } catch (error) {
  //     if (error instanceof ClientError) {
  //       const response = h.response({
  //         status: 'fail',
  //         message: error.message,
  //       });
  //       response.code(error.statusCode);
  //       return response;
  //     }

  //     // Server ERROR!
  //     const response = h.response({
  //       status: 'error',
  //       message: 'Maaf, terjadi kegagalan pada server kami.',
  //     });
  //     response.code(500);
  //     console.error(error);
  //     return response;
  //   }
  // }

  // putSongByIdHandler(request, h) {
  //   try {
  //     this._validator.validateNotePayload(request.payload);
  //     const { id } = request.params;

  //     this._service.editNoteById(id, request.payload);

  //     return {
  //       status: 'success',
  //       message: 'Catatan berhasil diperbarui',
  //     };
  //   } catch (error) {
  //     if (error instanceof ClientError) {
  //       const response = h.response({
  //         status: 'fail',
  //         message: error.message,
  //       });
  //       response.code(error.statusCode);
  //       return response;
  //     }

  //     // Server ERROR!
  //     const response = h.response({
  //       status: 'error',
  //       message: 'Maaf, terjadi kegagalan pada server kami.',
  //     });
  //     response.code(500);
  //     console.error(error);
  //     return response;
  //   }
  // }

  // deleteSongByIdHandler(request, h) {
  //   try {
  //     const { id } = request.params;
  //     this._service.deleteNoteById(id);

  //     return {
  //       status: 'success',
  //       message: 'Catatan berhasil dihapus',
  //     };
  //   } catch (error) {
  //     if (error instanceof ClientError) {
  //       const response = h.response({
  //         status: 'fail',
  //         message: error.message,
  //       });
  //       response.code(error.statusCode);
  //       return response;
  //     }

  //     // Server ERROR!
  //     const response = h.response({
  //       status: 'error',
  //       message: 'Maaf, terjadi kegagalan pada server kami.',
  //     });
  //     response.code(500);
  //     console.error(error);
  //     return response;
  //   }
  // }
}

module.exports = NotesHandler;