import './storyCommentSection.css';

import { createCommentsDiv } from '../commentsDiv/commentsDiv';

export const createStoryCommentSection = async (song, normalizedName) => {
  const storyCommentSection = document.createElement('section');
  storyCommentSection.className = 'story-comment-section';

  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs-container';

  const historyTab = document.createElement('h5');
  historyTab.className = 'h5-title';
  historyTab.textContent = 'HISTORIA';

  const commentsTab = document.createElement('h5');
  commentsTab.className = 'h5-title';
  commentsTab.textContent = 'COMENTARIOS';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';

  // Primero agregamos la historia de forma predeterminada
  const songStory = document.createElement('p');
  songStory.className = 'one-song-story';
  songStory.textContent = song.story;
  contentContainer.appendChild(songStory);

  historyTab.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(songStory); // Vuelve a añadir la historia si se hace clic
  });

  commentsTab.addEventListener('click', async () => {
    contentContainer.innerHTML = '';
    const commentsDiv = createCommentsDiv(normalizedName);
    commentsDiv.className = 'story-comments';
    contentContainer.appendChild(commentsDiv);
  });

  tabsContainer.append(historyTab, commentsTab);
  storyCommentSection.append(tabsContainer, contentContainer);

  return storyCommentSection;
};
