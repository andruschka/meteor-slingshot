Package.describe({
  name: "andruschka:slingshot",
  summary: "Directly post files to cloud storage services, such as AWS-S3.",
  version: "0.1.2",
  git: "https://github.com/andruschka/meteor-slingshot"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.use(["underscore", "check"]);
  api.use(["tracker", "reactive-var"], "client");

  api.add_files("lib/upload.js", "client");
  api.add_files([
    "lib/directive.js",
    "lib/storage-policy.js",
    "services/aws-s3.js",
    "services/google-cloud.js"
  ], "server");

  api.export("Slingshot");
});
