# Native Federation Example Project

Proof of concept project to explore Native Federation capabilieties within an NX Repo using Angular version 17+.

The project tries to adhere at the DDD approach by dividing the domain and features of each application, everything has been generated with _@angular-architects/ddd_

## Serve

Serve Native Federation Mfe1 (Federated Application)

```
npx nx run mfe1:serve
```

Serve application without Native Federation feature

```
npx nx run mfe1:serve-original --configuration=development
```

At the moment the Shell application it's not really used.

## Current problems

Currently when serving the native federation mfe1 application the browser doesn't reload when some file external from the application is updated. This happens even though the everything is declared in the _tsconfig.base.json_ and the build process runs smoothly.

Not clear if it's a problem from the Native Federation or not.
