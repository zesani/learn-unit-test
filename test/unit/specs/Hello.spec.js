import Vue from 'vue'
import MyComponent from 'src/components/Hello'

describe('Hello.vue', () => {
  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(Hello)
  //   })
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .to.equal('Welcome to Your Vue.js App.')
  // })
  it('has a created hook', () => {
    expect(typeof MyComponent.created).to.eql('function')
  })

  it('sets the correct default data', () => {
    expect(MyComponent.data).to.be.a('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).to.eql('hello!')
  })

  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).to.eql('bye!')
  })

  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).to.eql('bye!')
  })
})
