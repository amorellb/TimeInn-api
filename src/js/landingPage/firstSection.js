const firstSection = document.querySelector('.day-events-container');

/**
 * A function to generate the section background
 * @param {array} events
 * @returns A string with the video html that will be used as the section background
 */
export const generateVideoMarkup = function (event) {
  return `<video class="day-event-video" autoplay="autoplay" loop="loop" muted="muted">
            <source src="${event.videoURL}" type="video/mp4">
          </video>`;
};

/**
 * A function to generate hte html of the section with the event data
 * @param {array} events
 * @returns A string of the section data html
 */
export const generateInfoMarkup = function (event) {
  const firstDate = new Date(event.dates[0]).toLocaleDateString();
  const lastDate = new Date(
    event.dates[event.dates.length - 1]
  ).toLocaleDateString();
  return `
    <div class="day-event-info">
      <h1 class="day-event-title">${event.title}</h1>
      <p class="day-event-type">${event.type}</p>
      <p class="day-event-dates">${firstDate} - 
      ${lastDate}</p>
      <button class="tickets-btn day-tickets-btn" href="event.html">Tickets</button>
    </div>`;
};

/**
 * A function to render the data
 * @param {string} markup
 */
export const render = function (markup) {
  if (!firstSection) return;
  firstSection.insertAdjacentHTML('beforeend', markup);
};

/**
 * A function to handle the clicks on the tickets buttons and send the user to the event page
 */
const loadEventPage = function () {
  if (!firstSection) return;
  firstSection.addEventListener('click', e => {
    const btn = e.target.closest('.day-tickets-btn');
    if (!btn) return;
    window.location.replace('event.html');
  });
};
loadEventPage();
