let data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 28 },
    { name: 'Naruto', age: 32 },
    { name: 'Sasuke', age: 28 },
    { name: 'Sakura', age: 26 },
    { name: 'Kakashi', age: 35 },
    { name: 'Minato', age: 40 },
    { name: 'Nagato', age: 45 },
    { name: 'Obito', age: 30 },
    { name: 'Itachi', age: 35 },
    { name: 'Kisame', age: 40 },
    { name: 'Hinata', age: 25 }
]

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
});

info.innerHTML = details.join('\n');
