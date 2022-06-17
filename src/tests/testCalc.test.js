import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";
import { expect } from "@jest/globals";

describe('Test Calculator', ()=>{
  it('test operand1', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })

  it('test operand2', ()=>{
    const wrapper = mount(Calc)

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.element.value = '1'
    operand2.trigger('input')

    expect(wrapper.vm.operand2).toBe(1)
  })

  it('test sum', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('1')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })


  it('test minus', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('6')
    operand2.setValue('3')

    const btn = wrapper.find('button[name="-"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('test diviation', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('6')
    operand2.setValue('3')

    const btn = wrapper.find('button[name="/"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  it('test multiplication', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('2')
    operand2.setValue('3')

    const btn = wrapper.find('button[name="*"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(6)
  })

  it('test exp', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('3')
    operand2.setValue('4')

    const btn = wrapper.find('button[name="Exp."]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(81)
  })
})