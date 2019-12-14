const app = document.querySelector(".createTable")

app.innerHTML += `
	<label for="name">Table name</label>
	<input type="text" name="name">
	<br><br>
	<label for="name">Column name</label>
	<input type="text" name="name">	
	<label for="type">Type</label>	
	<select name="type">
		<option>String</option>
		<option>Integer</option>
		<option>Boolean</option>
	</select>
	<label for="length">Length</label>
	<input type="text" name="length">
	<br><br>
	<input type="submit" value="Submit">					
`


