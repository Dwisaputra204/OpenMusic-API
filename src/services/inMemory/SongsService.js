/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor() {
    this._songs = [];
  }

  addSong({
    title, year, performer, genre, duration,
  }) {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newSong = {
      id, title, year, performer, genre, duration, insertedAt, updatedAt,
    };

    this._songs.push(newSong);
    const isSuccess = this._songs.filter((song) => song.id === id).length > 0;
    if (!isSuccess) {
      throw new InvariantError('song gagal ditambahkan');
    }

    return id;
  }

  getSongs() {
    const songs = this._songs.map((song) => (
      {
        id: song.id,
        title: song.title,
        performer: song.performer,
      }
    ));
    return songs;
  }

  getSongById(id) {
    const song = this._songs.filter((n) => n.id === id)[0];
    if (!song) {
      throw new NotFoundError('Song tidak ditemukan');
    }
    return song;
  }

  // editNoteById(id, { title, body, tags }) {
  //   const index = this._notes.findIndex((note) => note.id === id);

  //   if (index === -1) {
  //     throw new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan');
  //   }

  //   const updatedAt = new Date().toISOString();

  //   this._notes[index] = {
  //     ...this._notes[index],
  //     title,
  //     tags,
  //     body,
  //     updatedAt,
  //   };
  // }

  // deleteNoteById(id) {
  //   const index = this._notes.findIndex((note) => note.id === id);
  //   if (index === -1) {
  //     throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
  //   }
  //   this._notes.splice(index, 1);
  // }
}

module.exports = SongsService;
