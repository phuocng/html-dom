const slugify = (item: string) => item.toLowerCase().split(' ').join('-');

const capitalizeFirstChar = (input: string) => `${input.substr(0, 1).toUpperCase()}${input.substr(1)}`;
const unslugify = (slug: string) => capitalizeFirstChar(slug.toLowerCase().split('-').join(' '));

export {
    slugify,
    unslugify,
};
