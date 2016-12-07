import Vue from 'vue'
import MyComponent from 'src/components/Hello2'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Hello.vue props data', () => {
  it('render correctly with different props', () => {
    expect(getRenderedText(MyComponent, {
      msg: 'Hello'
    })).to.eql('Hello')
    expect(getRenderedText(MyComponent, {
      msg: 'Bye'
    })).to.eql('Bye')
  })
})
