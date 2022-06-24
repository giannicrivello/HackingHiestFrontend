#!/bin/bash

curl -d '{"username":"gianni", "password":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/register

