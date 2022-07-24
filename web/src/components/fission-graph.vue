<template>
  <v-network-graph
      :nodes="nodes"
      :edges="edges"
      :configs="configs"
      :layouts="layouts"
  />
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'fission-graph',
  setup() {

    const nodes = {
      node1: { name: "Node 1", color:"rgba(82, 114, 123, 0.2)", },
      node2: { name: "Node 2", color: "rgba(82, 114, 123, 0.4)", },
      node3: { name: "Node 3", color: "rgba(82, 114, 123, 0.6)" },
      node4: { name: "Node 4", color:"rgba(82, 114, 123, 0.8)"},
      node5: { name: "Node 5", color: "rgba(82, 114, 123, 0.9)"},
      // ...
    }
    const edges = {
      edge1: { source: "node1", target: "node5" },
      edge2: { source: "node2", target: "node4" },
      edge3: { source: "node2", target: "node5" },
      edge4: { source: "node3", target: "node4" },
      edge5: { source: "node3", target: "node5" },
      edge6: { source: "node4", target: "node5" },

      // ...
    }
    const layouts = {
      nodes: {
        node1: {x: 0, y: -130},
        node2: {x: 80, y: -20},
        node3: {x: 160, y: -100},
        node4: {x: 240, y: -40},
        node5: {x: 110, y: -80},
      },
    }
    const configs = {
      node: {
        normal: {
          type: "circle",
          // radius: node => node.size, // Use the value of each node object
          color: node => node.color,
          radius : 8,
          // radius: node => node.size,
        },
      }
    }
    return { nodes, edges, configs, layouts }
  },
})
</script>

<!--<style>-->
<!--.fission {-->
<!--  height: 10rem;-->
<!--  width: 60rem;-->
<!--  margin: auto;-->
<!--}-->
<!--</style>-->