I will check this right now. So we have four modules,

- chrome: this will have rollup and puppeteer
- chrome-shared: this won't have rollup, and will be imported by chrome

- driver: this will have rollup, and will run inside puppeteer
- driver-shared: this won't have rollup, and will be imported by driver

Another solution:
One main rollup config file.
- chrome: 
    - works with node.
    - add the **only** field
- driver:
    - builds if we don't **run** it on node.
    - remove the **only** field