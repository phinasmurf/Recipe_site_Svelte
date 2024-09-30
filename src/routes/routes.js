// src/routes/routes.js
import Home from '../lib/Home.svelte';
import Counter from '$lib/Counter.svelte';
import Opskrifter from '../lib/Opskrifter.svelte';

export default {
    '/': Home,
    '/counter': Counter,
    '/opskrifter': Opskrifter,
};