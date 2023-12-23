/**
 * Some utils functions to use
 */


/**
 * Only generate some elements for generate the progress bar
 */
export function genearteProgressBar() {
  const container = document.querySelector('.container');

  // getting elements for add classes to show
  const progressDiv = document.createElement('div');
  progressDiv.className = 'progress';
  const progressBarDiv = document.createElement('div');
  progressBarDiv.className = 'progress-bar progress-bar-animated progress-bar-striped bg-success';

  // adding to principal
  progressDiv.append(progressBarDiv);
  container.append(progressDiv);

}


/**
 * 
 * @param {string} message The message for show in the alert with styles
 */
const showAlert = (message) => {
  const alert = document.createElement('div');
  // const button = document.createElement('button');
  alert.innerHTML = `<strong>${message}</strong>`;
  alert.className = 'alert alert-success alert-dimissible show fade mt-4 mb-5';
  alert.setAttribute('role', 'alert');

  const container = document.getElementById('wrapper');
  // const progressBar = document.querySelector('.progress-bar')
  container.appendChild(alert);

}

/**
 * Show a animation for the progress bar
 */
export function showAnimation() {

  // getting for change value
  const progressBar = document.querySelector('.progress-bar');

  // inital value
  progressBar.setAttribute('style', `width: ${10}%;`);
  const duration = 500;

  // the code is verbose
  setTimeout(() => {
    progressBar.setAttribute('style', `width: ${20}%;`);
    setTimeout(() => {
      progressBar.setAttribute('style', `width: ${30}%;`);
      setTimeout(() => {
        progressBar.setAttribute('style', `width: ${40}%;`);
        setTimeout(() => {
          progressBar.setAttribute('style', `width: ${50}%;`);
          setTimeout(() => {
            progressBar.setAttribute('style', `width: ${60}%;`);
            setTimeout(() => {
              progressBar.setAttribute('style', `width: ${70}%;`);
              setTimeout(() => {
                progressBar.setAttribute('style', `width: ${80}%;`);
                setTimeout(() => {
                  progressBar.setAttribute('style', `width: ${90}%;`);
                  setTimeout(() => {
                    progressBar.setAttribute('style', `width: ${100}%;`);
                    setTimeout(() => {
                      showAlert('Finished'); // for finished
                    }, 500)
                  }, duration)
                }, duration)
              }, duration)
            }, duration)
          }, duration)
        }, duration)
      }, duration);
    }, duration);
  }, duration);


}