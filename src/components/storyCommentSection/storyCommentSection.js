import { createSongComments } from '../createSongComment/createSongComments';
import './storyCommentSection.css';

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

  const songStory = document.createElement('p');
  songStory.className = 'one-song-story';
  songStory.textContent = song.story;
  contentContainer.appendChild(songStory);

  historyTab.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(songStory);
  });

  commentsTab.addEventListener('click', async () => {
    contentContainer.innerHTML = '';
    const songComments = await createSongComments();
    songComments.className = 'song-comments';
    contentContainer.appendChild(songComments);
  });

  tabsContainer.append(historyTab, commentsTab);
  storyCommentSection.append(tabsContainer, contentContainer);

  return storyCommentSection;
};
