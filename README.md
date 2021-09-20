
# Motorway UI Test

Welcome to my Motorway UI technical test. Check below for how to run it, tasks and other notes.


## Running it

Nothing changed from the original repo, just `yarn run serve` to run the server, then `yarn start` to load the front end. For testing `yarn test`.


## Tasks

- [x] Create a responsive UI to display the images returned by the API.
- [x] Add form to collect user data
- [x] Form must validate on client
- [x] Optimise API performance


## Notes

- I considered compressing the images on the backend before serving them (with `resize-optimize-images`), but decided not to as that would impact the API's performance. Such handling of images should be done when the images are added to the system (e.g. added via a form), different thumbnail sizes created and limits set so no image is too big/heavy
- API performance was calculated using performance.now. Check console for information
- Form validation is not 100% perfect. I'd use something like `formik` and `yup` to simplify the process and make sure my validation is on point without the tears
- Site developed using Chrome/mac Version 93.0.4577.82, but should work fine on any other browser
