// 32820146-f80bc3d3813b2cf292867c0c6

export const fetchImages = async (value, page) =>
{
    return await fetch
        (`https://pixabay.com/api/?key=32820146-f80bc3d3813b2cf292867c0c6&q=${value}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${page}`)
        .then(async response =>
        {
            if (!response.ok) {
                if (response.status === 404) {
                    return [];
                }
                throw new Error(response.status);
            }
            return await response.json();
            }
    )
        .catch(error => 
        {
            console.error(error);
        })
}