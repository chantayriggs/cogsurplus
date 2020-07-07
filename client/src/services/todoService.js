// services makes calls to our backend so we don't have to deal with that in our components

export default {
    getTodos: () => {
        return fetch("/user/todos")
              .then(response => {
				if(response.status !== 401) {
					return response.json().then(data => data)
				}
				else  
					return { message: { msgBody: "Unauthorized", msgError: true }}
              })
	},
	postTodo: todo => {
		return fetch("/user/todo", {
			method: "post",
			body: JSON.stringify(todo),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response => {
			if(response.status !== 401) {
				return response.json().then(data => data)
			}
			else  
				return { message: { msgBody: "Unauthorized", msgError: true }}
		})
	},
	deleteTodo: id => {
		return fetch(`/user/delete-todo/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
          .then( data => data)
	},
	editTodo: (id, editBody) => {
		return fetch(`/user/update-todo/${id}`, {
			method: "post",
			body: JSON.stringify(editBody),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response => {
			if(response.status !== 401) {
				return response.json().then(data => data)
			}
			else  
				return { message: { msgBody: "Unauthorized", msgError: true }}
		})
	}
}