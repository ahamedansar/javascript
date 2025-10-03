function greet(fname, name, lname, ...titles) {
    console.log(`name:${fname} ${name} ${lname}`);
    console.log(`Titles: ${titles.join(', ')}`);
}
greet("Ahamed", "Ansar", "Nasim", "Engineering", "Eeveloper", "Auhtor")