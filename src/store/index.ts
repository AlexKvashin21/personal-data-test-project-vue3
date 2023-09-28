import {createStore} from "vuex";
export interface State {
    personalData: {
        name: string,
        age: string
    };
    childrenData: {
        id: number,
        name: string,
        age: string
    }[];
}

export default createStore<State>({
    state: {
        personalData: {
            name: '',
            age: ''
        },
        childrenData: [],
    },
    mutations: {
        setPersonalData(state, personalData) {
            state.personalData = personalData;
        },
        setChildrenData(state, childrenData) {
            state.childrenData = childrenData;
        },

        changePersonalName(state, name) {
            state.personalData.name = name;
        },
        changePersonalAge(state, age) {
            state.personalData.age = age;
        },

        changeChildAge(state, {age, index}) {
            state.childrenData[index].age = age
        },
        changeChildName(state, {name, index}) {
            state.childrenData[index].name = name
        },


        addChild(state) {
            state.childrenData.push({id: Date.now(), name: '', age: ''})
        },
        removeChild(state, id) {
            console.log(state.childrenData.filter(child => {
                console.log(child.id != id);
                return child.id != id
            }))
            const i = state.childrenData.filter(child => {
                 return child.id != id
             })
            state.childrenData = i
        }
    },
    actions: {
        getPersonalData({commit}) {
            // @ts-ignore
            const localPersonalData = JSON.parse(localStorage.getItem('personal_data'))
            // @ts-ignore
            const localChildrenData = JSON.parse(localStorage.getItem('children_data'))

            commit('setPersonalData', localPersonalData)
            commit('setChildrenData', localChildrenData)
        },
        async save({state, dispatch}) {
            if (await dispatch('validation')) {

                localStorage.setItem('personal_data', JSON.stringify(state.personalData))
                localStorage.setItem('children_data', JSON.stringify(state.childrenData))

                window.alert('Данные успешно сохранены!')
            }
            else {
                window.alert('Данные не сохранены, проверьте ваши введённые данные')
            }
        },
        validation({state}):boolean {
            if (!state.personalData.age.length || state.personalData.age.length > 2 || !state.personalData.name.length) {
                return false
            }
            if (state.childrenData.length) {
                for (let child of state.childrenData) {
                    if (!child.name.length || !child.age.length || child.age.length > 2 ){
                        return false
                    }
                }
            }
            return true
        }
    },
    getters: {

    },
});