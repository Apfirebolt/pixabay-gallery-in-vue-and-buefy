import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../components/FooterComponent.vue'

describe('Footer Component', () => {
    it('renders the footer with the correct text', () => {
        const wrapper = mount(Footer)
        const currentYear = new Date().getFullYear()
        expect(wrapper.text()).toContain(`© ${currentYear} Vue Dinosaurs Built with Vue 3 and Tailwind CSS`)
    })

    it('has the correct classes applied', () => {
        const wrapper = mount(Footer)
        const footer = wrapper.find('footer')
        expect(footer.classes()).toContain('py-10')
        expect(footer.classes()).toContain('px-8')
        expect(footer.classes()).toContain('bg-secondary')
        expect(footer.classes()).toContain('text-light')
        expect(footer.classes()).toContain('dark:bg-slate-700')
        expect(footer.classes()).toContain('dark:text-white')
    })

    it('contains a paragraph with the correct text alignment and size', () => {
        const wrapper = mount(Footer)
        const paragraph = wrapper.find('p')
        expect(paragraph.classes()).toContain('text-center')
        expect(paragraph.classes()).toContain('text-sm')
    })
})