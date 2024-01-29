import axios from 'axios';
import { makeAutoObservable } from 'mobx';

interface Cat {
    id: string;
    url: string;
    liked: boolean;
}

class MobXStore {
    cats: Cat[] = [];
    loading = false;
    error: string | null = null;
    likes = new Map<string, boolean>();
    hasLoadedData = false;

    constructor() {
        makeAutoObservable(this);
    }

    hasMore = true;
    currentPage = 1;

    async fetchCats(page: number) {
        if (this.hasLoadedData && page <= this.currentPage) {
            return;
        }

        this.loading = true;
        try {
            const response = await axios.get<Cat[]>(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}&api_key=live_JwZ0oveshO57rimClPp6ovpeb1W32xUgrXF4YpopjANGh7oUgyX5p4TYSiTnaetC`);
            const newCats = response.data.map(cat => ({ ...cat, liked: this.likes.get(cat.id) || false }));
            this.cats = [...this.cats, ...newCats];
            this.currentPage = page;
            this.hasLoadedData = true;
            this.hasMore = newCats.length > 0;
        } catch (error) {
            this.error = 'Error fetching cat images';
        } finally {
            this.loading = false;
        }
    }

    toggleLike(catId: string) {
        const currentLikeStatus = this.likes.get(catId) || false;
        this.likes.set(catId, !currentLikeStatus);

        this.cats = this.cats.map(cat => {
            if (cat.id === catId) {
                return { ...cat, liked: !currentLikeStatus };
            }
            return cat;
        });
    }
}

const mobXStore = new MobXStore();
export default mobXStore;
