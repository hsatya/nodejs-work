var axios = require("axios");

var config = {
  method: "get",
  url: "https://staging.driven.perpetualblock.io/api/search?group=All&subCat=All&pageNo=0&fetchSize=20&year=gte%3A%3A2014",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWI4NWNhOWFmOGUyMjYzMTNhMjUxMmIiLCJpYXQiOjE2NTI0MTg4MzIxNDEsImV4cCI6MTY1MjQxODgzMjE0MX0.dMSb7W14cMjCQSYtULlgV6n9T9sbZTZUh_FB6xoNNhFSsaPAW9jczW2dqZGLaNuEf-V-gV59tCfMmWlK1UcokVuSqjg7S6foss3NagRms2DdouufOIUM-vv_ittUV9oXPrZfBYEeSDOwb3tKTFPKcu-gEczrvlCj55WZwoGWutymmDUYc2DcNgaqEEriuznJyf9icum71KZsRPr_Bv9s5eHFhHzd-1sRPJH9BkvdoQPLNUZ9RFjwprQvt8_hSCy1tA9_IY8a6y0qoicrow7XmI8vlLGFtMBfhe-1SfGuW5fyzz4qPJoikeRnkl8eEnfGRst6cGW38Tk7v5gp6liSM4cEs7E2CrDezvgZ-AvN97ho_K6ZNFryMEeDTli7rZIk7UyQOGTpygq-1P_i1eds3OlHIrHSw17QnEiNU3weE4pDR0qmL0oVmJF40vYwAL7eC-L5q2S__eQAocJ71XqxOhRdbF2F7r87GYK4JnlxS76WqdmB2wgI_Y85hiZzD19McrB4kDqy3X19PZdGpEa7tAL9H8QSvCmyKTL_1fZu3U7B6QogXneYe0YwF1AwIRSsk_Ws5T2Z1iQZIiQcjMRjJuE7hv-iVHsmHcot7iqzuqJz9llXk-eAioJDQbd4kegAFfVft6vxpEE2DVHtKwwsTcObJxWySWj3g4mgmggEuo8",
    Cookie:
      "connect.sid=s%3Auf1dhtX_q-QqqtLVABc_kHWmkaCTh1eF.zSWwfoYGbwXnAqjioXRL2dYJCYjEgh1dqppD%2FckNC3A",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
