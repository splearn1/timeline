# Timeline is set up to be the HOMEPAGE for this application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Javascript path and string navigation

```javascript
      let prodWebsiteProtocolAndHostAndPort = "https://my.production.website:12345";
      let devWebsiteProtocolAndHostAndPort = "http://localhost:3000";
      let currentProtocolAndHostAndPort = prodWebsiteProtocolAndHostAndPort;
      let pathForThisNextRequest = "/web/user_data";

      // let fullRequestURL = prodWebsiteProtocolAndHostAndPort + pathForThisNextRequest;
      // let fullRequestURL = currentProtocolAndHostAndPort + pathForThisNextRequest;
      let fullRequestURL = `${currentProtocolAndHostAndPort}${pathForThisNextRequest}`;

      let proto = "http";
      let host = "localhost";
      let optional_port = ":3000";
      let path = "/login";
      let url = `${proto}://${host}${optional_port}${path}`;
```
