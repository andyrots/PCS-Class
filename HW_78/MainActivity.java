package com.example.andyrots.mycontacts;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button addButton = (Button)findViewById(R.id.add);
        final EditText newContact = (EditText)findViewById(R.id.newContact);

        String [] contacts = new String[] {
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton",
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton",
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton"
        };

        final ArrayList<String> contactList = new ArrayList<String>();
        for ( String name : contacts ) {
            contactList.add(name);
        }

        final ListView contactsListView = (ListView)findViewById(R.id.contactsListView);
        //ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, contacts);
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.contact_list_item, R.id.contactNameTextView, contactList);
        contactsListView.setAdapter(adapter);


        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String addedContact = newContact.getText().toString();
                newContact.setText("");
                adapter.add(addedContact);
                contactsListView.setAdapter(adapter);
            }
        });
    }
}

