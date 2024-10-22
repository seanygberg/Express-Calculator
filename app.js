const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { parseNums, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.');
    }
    let numsStr = req.query.nums.split(',');
    let nums = parseNums(numsStr);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
      }
    
    return res.send(result);
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.');
    }
    let numsStr = req.query.nums.split(',');
    let nums = parseNums(numsStr);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
      }
    
    return res.send(result);
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.');
    }
    let numsStr = req.query.nums.split(',');
    let nums = parseNums(numsStr);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
      }
    
    return res.send(result);
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});