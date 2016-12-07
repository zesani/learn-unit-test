import Vue from 'vue'
import MyComponent from 'src/components/Cal'

function getRenderedInstant (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

describe('ColorDisplay.vue props data', () => {
  it('ต้อง props data', () => {
    expect(MyComponent).to.be.a('Object')
  })
  it('component ต้องชื่อ cal', () => {
    expect(MyComponent.name).to.eql('cal')
  })
  it('1 + 1 = 2', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '+',
      operant1: 1,
      operant2: 1
    }).result).to.eql(2)
  })
  it('1 - 1 = 0', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '-',
      operant1: 1,
      operant2: 1
    }).result).to.eql(0)
  })
  it('2 * 2 = 4', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '*',
      operant1: 2,
      operant2: 2
    }).result).to.eql(4)
  })
  it('20 / 5 = 4', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '/',
      operant1: 20,
      operant2: 5
    }).result).to.eql(4)
  })
  it('100 / 0 = Infinity', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '/',
      operant1: 100,
      operant2: 0
    }).result).to.eql(Infinity)
  })
  it('0 / 100 = 0', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '/',
      operant1: 0,
      operant2: 200
    }).result).to.eql(0)
  })
  it('0 / 100 = 0 ที่ html', () => {
    expect(getRenderedInstant(MyComponent, {
      operator: '/',
      operant1: 0,
      operant2: 200
    }).$el.textContent.trim()).to.eql('0')
  })
})
