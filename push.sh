#!/bin/env bash

git push
aws s3 sync app s3://joshcurtis-test --profile user2 --acl public-read