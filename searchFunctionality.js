module.exports = (movie,db,arr) => {

// creating the regex of the movie name
const regex = new RegExp(movie.split('').join('.*'), 'ig');

// converting JSON db to object array
const dbObjArr = db.map((cur) => {
    return (JSON.parse(JSON.stringify(cur)));
});

// first filter of the db according to the letters match 
const firstFilter = dbObjArr.filter((cur) => {
    if(regex.test(cur.MovieName))
    return cur;
});

// Second filter to match chunks 
let secondFilter = firstFilter.map((cur) => {
 match = [...cur.MovieName.matchAll(regex)];
 return {cur, length : match[0][0].length, index: match[0].index};
});

// sorting on the basis of smallest chunk length and closest distance of match from index 0
secondFilter.sort((a,b) => {
if(a.length < b.length) 
return -1;
if (a.length > b.length)
 return 1;
 if(a.index < b.index) 
return -1;
if (a.index > b.index)
 return 1;

 return 0;
});

// pushing into the given arr
arr.push(secondFilter);

}
