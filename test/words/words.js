module.exports = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);