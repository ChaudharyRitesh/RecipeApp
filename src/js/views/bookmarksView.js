import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';
import { state } from '../model.js';


class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks found yet. Please find a nice recipe to bookmark it for getting the recipes. 😊😊';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
