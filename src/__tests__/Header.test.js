import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../components/HeaderComponent.vue';

describe('Header Component', () => {
    it('renders correctly', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('h2').text()).toBe('Vue Dinosaurs');
    });

    it('displays links correctly', () => {
        const wrapper = mount(Header);
        const links = wrapper.findAll('router-link');
        expect(links).toHaveLength(6);
        expect(links[0].text()).toBe('Home');
        expect(links[1].text()).toBe('About');
        expect(links[2].text()).toBe('Dinosaurs');
    });

    it('applies scrolled class when scrolled down', async () => {
        const wrapper = mount(Header);
        window.scrollY = 150;
        window.dispatchEvent(new Event('scroll'));
        await wrapper.vm.$nextTick();
        expect(wrapper.find('nav').classes()).toContain('bg-dark');
    });

    it('removes scrolled class when scrolled up', async () => {
        const wrapper = mount(Header);
        window.scrollY = 0;
        window.dispatchEvent(new Event('scroll'));
        await wrapper.vm.$nextTick();
        expect(wrapper.find('nav').classes()).toContain('bg-secondary');
    });
});
