<template>
  <div>
    <ul @click="setCurrent($event)">
      <li v-for="(item, index) in list"
          :id="item.id"
          :class="{active: item.id === currentId && currentId !== ''}"
          :key="index">
        {{item.id}} : {{item.name}}
      </li>
    </ul>
    <button @click='handleClick'> 添加 </button>
    <ul>
      <li v-for="(item, index) in targetList"
          :key="index">
        {{item.id}} : {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      currentId: '',
      list: [
        {
          id: 1,
          name: 'food'
        },
        {
          id: 2,
          name: 'bed'
        },
        {
          id: 3,
          name: 'laptop'
        },
        {
          id: 4,
          name: 'nofriends'
        }
      ],
      targetList: []
    }
  },
  methods: {
    setCurrent (event) {
      this.currentId = parseInt(event.target.id, 10)
    },
    handleClick () {
      if(this.currentId === '') return
      this.targetList.push(this.list[this.currentId - 1])
      this.currentId = ''
    }
  }
}
</script>

<style>
 .active {
    list-style: none;
    background: green;
    transition: background 0.5s;
  }
</style>