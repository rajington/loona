---
title: Angular - Context
sidebar_label: Context
---

## Context

<AUTOGENERATED_TABLE_OF_CONTENTS>

---

## Reference

### `patchQuery`

A helper function to modify a query.

Allows to set new data:

```typescript
context.patchQuery(
  gql`
    {
      books
    }
  `,
  data => {
    return [
      {
        id: 1,
        title: 'Sample book',
        __typename: 'Book',
      },
    ];
  },
);
```

Or to modify it:

```typescript
context.patchQuery(
  gql`
    {
      books
    }
  `,
  data => {
    data.push({
      id: 2,
      title: 'New book',
      __typename: 'Book',
    });
  },
);
```

> It uses [Immer](https://www.npmjs.com/package/immer) under the hood to make data modification easier, you don't have to make a new object like you would in redux or ngrx, we do that for you.

### `patchFragment`

A helper function to modify / create a fragment.

### `writeData`

An alias for [`ApolloCache.writeData`](https://www.apollographql.com/docs/link/links/state.html#write-data).

```typescript
// creates a fragment and references it in the books field
context.writeData({
  data: {
    books: [
      {
        id: 1,
        title: 'Sample Book',
        __typename: 'Book',
      },
    ],
  },
});

// a fragment
context.writeData({
  id: 'Book:1',
  data: {
    id: 1,
    title: 'Sample book',
    __typename: 'Book',
  },
});
```

### `cache`

Contains an ApolloCache.

### `getCacheKey`

A helper function to generate an id of a fragment based on an object. [Read more in Apollo Docs](https://www.apollographql.com/docs/react/essentials/local-state.html)