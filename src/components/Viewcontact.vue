<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="text-center">ชื่อ</th>
                    <th class="text-center">อีเมล</th>
                    <th class="text-center">รายละเอียด</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center">John</td>
                    <td class="text-center">Doe</td>
                    <td class="text-center">john@example.com</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "Viewcontact",
         data: {
            name:[],
            // newCat:null
        },
    mounted() {
        
        if(localStorage.getItem('name')) {
            try {
                this.name = JSON.parse(localStorage.getItem('name'));
            } catch(e) {
                localStorage.removeItem('name');
            }
        }
    },
}
</script>