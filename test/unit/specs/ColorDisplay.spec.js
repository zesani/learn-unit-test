import Vue from 'vue'
import MyComponent from 'src/components/ColorDisplay'

function getRenderedComputedProperty (Component, propsData, property) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm[property]
}

describe('ColorDisplay.vue props data', () => {
  it('render correctly with different props', () => {
    expect(getRenderedComputedProperty(MyComponent, {
      r: '255',
      g: '0',
      b: '0'
    }, 'style')).to.eql('background: rgb(255, 0, 0);')

    expect(getRenderedComputedProperty(MyComponent, {
      r: '0',
      g: '255',
      b: '0'
    }, 'style')).to.eql('background: rgb(0, 255, 0);')
  })
})
