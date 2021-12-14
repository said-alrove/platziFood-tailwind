const nodeEnv = "prod";
module.exports = {
  plugins: {
    "postcss-import": {},
    // HERE I COULD NOT USE THE TAILWIND/NESTING FEATURE BECAUSE NODE COULD NOT FIND THE MODULE FOR AN UNKNOWN REASON
    "postcss-nested": {},
    "tailwindcss": { 
      config: './update.config.js' 
    },
    "autoprefixer": {},
    "cssnano": nodeEnv === 'prod' ? {
        preset: [
          require('cssnano-preset-default'), 
          { discardComments: true }
        ]
    } : false,
  }
}

// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss/nesting"),
//     require("tailwindcss")({
//       config: "./update.config.js"
//     }),
//     require("autoprefixer"),
//     ...(nodeEnv === "production" ? { cssnano: {} } : {})
//   ]
// }